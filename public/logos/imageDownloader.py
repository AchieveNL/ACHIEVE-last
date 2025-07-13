#!/usr/bin/env python3
"""
Image Downloader Script
Downloads all images from the provided URLs into a specified directory.
"""

import os
import requests
import urllib.parse
from pathlib import Path
import time
from typing import List, Tuple

class ImageDownloader:
    def __init__(self, download_dir: str = "downloaded_images"):
        """
        Initialize the ImageDownloader.
        
        Args:
            download_dir (str): Directory to save downloaded images
        """
        self.download_dir = Path(download_dir)
        self.download_dir.mkdir(exist_ok=True)
        
        # Session for connection pooling
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def get_filename_from_url(self, url: str, index: int) -> str:
        """
        Generate a filename from URL or use index as fallback.
        
        Args:
            url (str): Image URL
            index (int): Image index for fallback naming
            
        Returns:
            str: Generated filename
        """
        try:
            # Parse URL to get filename
            parsed_url = urllib.parse.urlparse(url)
            filename = os.path.basename(parsed_url.path)
            
            # If no filename or extension, generate one
            if not filename or '.' not in filename:
                # Try to get extension from URL parameters or default to jpg
                extension = 'jpg'
                if 'webp' in url.lower():
                    extension = 'webp'
                elif 'svg' in url.lower():
                    extension = 'svg'
                elif 'png' in url.lower():
                    extension = 'png'
                
                filename = f"image_{index:03d}.{extension}"
            
            # Clean filename of invalid characters
            invalid_chars = '<>:"/\\|?*'
            for char in invalid_chars:
                filename = filename.replace(char, '_')
                
            return filename
            
        except Exception:
            # Fallback filename
            return f"image_{index:03d}.jpg"
    
    def download_image(self, url: str, filename: str) -> Tuple[bool, str]:
        """
        Download a single image.
        
        Args:
            url (str): Image URL
            filename (str): Local filename to save as
            
        Returns:
            Tuple[bool, str]: (Success status, Error message if any)
        """
        try:
            filepath = self.download_dir / filename
            
            # Skip if file already exists
            if filepath.exists():
                return True, "File already exists"
            
            # Download with streaming to handle large files
            response = self.session.get(url, stream=True, timeout=30)
            response.raise_for_status()
            
            # Write file in chunks
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            
            return True, "Downloaded successfully"
            
        except requests.exceptions.RequestException as e:
            return False, f"Request error: {str(e)}"
        except IOError as e:
            return False, f"File error: {str(e)}"
        except Exception as e:
            return False, f"Unexpected error: {str(e)}"
    
    def download_all(self, urls: List[str], delay: float = 0.5) -> dict:
        """
        Download all images from the provided URLs.
        
        Args:
            urls (List[str]): List of image URLs
            delay (float): Delay between downloads in seconds
            
        Returns:
            dict: Download statistics
        """
        total_urls = len(urls)
        successful = 0
        failed = 0
        errors = []
        
        print(f"Starting download of {total_urls} images to '{self.download_dir}'...")
        print("-" * 60)
        
        for index, url in enumerate(urls, 1):
            filename = self.get_filename_from_url(url, index)
            
            print(f"[{index:3d}/{total_urls}] Downloading: {filename}")
            print(f"    URL: {url[:80]}{'...' if len(url) > 80 else ''}")
            
            success, message = self.download_image(url, filename)
            
            if success:
                successful += 1
                print(f"    ✓ {message}")
            else:
                failed += 1
                error_info = f"Image {index} ({filename}): {message}"
                errors.append(error_info)
                print(f"    ✗ {message}")
            
            # Add delay to be respectful to servers
            if index < total_urls:
                time.sleep(delay)
            
            print()
        
        # Print summary
        print("=" * 60)
        print("DOWNLOAD SUMMARY")
        print("=" * 60)
        print(f"Total images: {total_urls}")
        print(f"Successfully downloaded: {successful}")
        print(f"Failed: {failed}")
        print(f"Success rate: {successful/total_urls*100:.1f}%")
        
        if errors:
            print("\nERRORS ENCOUNTERED:")
            for error in errors:
                print(f"  - {error}")
        
        return {
            'total': total_urls,
            'successful': successful,
            'failed': failed,
            'errors': errors
        }

def main():
    """Main function to run the image downloader."""
    
    # List of all image URLs
    image_urls = [
        "https://res.cloudinary.com/achievenl/image/upload/v1695392270/achieve/xeoteynfcbuc3ucchior.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738684962/achieve/cfbomnstexbnxmbniqoh.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1695392767/achieve/ghef8gk1v5dt8klsr7xg.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1695394200/achieve/cw30pedhruzbgsqqvkum.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1745330385/achieve/jzmhknikpvw1clrqoalo.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738761011/achieve/sg8aoxqyonvwvcltfv4r.svg",
        "https://storage.googleapis.com/achieve-bucket/7ce89770-1a2c-4684-bcf9-015963f4529fEra Contour.png",
        "https://res.cloudinary.com/achievenl/image/upload/v1745333252/achieve/pjakk0zho1ukd1klsojn.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1695394040/achieve/cvilsmhjfb0wiicst0ku.webp",
        "https://storage.googleapis.com/achieve-bucket/4051b13f-c48f-41a1-aa24-157274a2135dfc.png",
        "https://res.cloudinary.com/achievenl/image/upload/v1740996515/achieve/uvotsygvo6nb890f7oxg.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1695389263/achieve/nlr8yk8ztho36u7dwbqq.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1706980922/sarac_rdt7c6.png",
        "https://res.cloudinary.com/achievenl/image/upload/v1695389247/achieve/iblvszhgskxp7z3u1odd.webp",
        "https://storage.googleapis.com/achieve-bucket/afed088d-43fc-41a1-b74c-b7c754b0aba1deca.png",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760840/achieve/bmucilhapgmva67li2td.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738751007/achieve/ncjoyoweja3ftnkszyju.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1740995142/achieve/zwytburvksqjvcvzvja9.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760948/achieve/gfk9rmluoukqs1gwpfhb.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1744119901/achieve/mwmjt7gzgp7xylxy0qfw.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760996/achieve/vjg4ruohssewplnsqncr.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738685039/achieve/tbfhacjjpnxennd3itfq.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738747605/achieve/gm8lp8gxsyk1fpam3nen.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1706980896/algemene_qfx2l3.png",
        "https://res.cloudinary.com/achievenl/image/upload/v1695393425/achieve/v3ioznzmvggkq5vyvhrd.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1745312388/achieve/cucjej0ayaki1cqolbtj.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760858/achieve/sbwd5jsvopk4yisuvami.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738748117/achieve/oxhewc6kqwsgrkcmydll.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760968/achieve/czgftfxmdbxwnwa3lket.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1695648932/achieve/ovc1oynmig4yvkzwsezz.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738751329/achieve/q2twycyt80z4jypu8uxk.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760883/achieve/apjpc0ejdcvmokws5lpm.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1741103827/achieve/wstitehtyhllwuuvwgxn.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738760927/achieve/sjceikfc4gfm4slyigzz.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738747872/achieve/ejbs7y8qtfor1ljtfv7l.svg",
        "https://res.cloudinary.com/achievenl/image/upload/v1738676657/achieve/c11rhio42s1kpup81vee.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1695392298/achieve/za1hegevv9w1zbwryk1y.webp",
        "https://res.cloudinary.com/achievenl/image/upload/v1738684917/achieve/k3aivbwy07b1i07u6ash.svg"
    ]
    
    # Create downloader instance
    downloader = ImageDownloader(download_dir="company_logos")
    
    # Download all images
    results = downloader.download_all(image_urls, delay=0.5)
    
    # Optional: Create a summary file
    summary_file = downloader.download_dir / "download_summary.txt"
    with open(summary_file, 'w') as f:
        f.write(f"Download Summary\n")
        f.write(f"================\n")
        f.write(f"Total images: {results['total']}\n")
        f.write(f"Successfully downloaded: {results['successful']}\n")
        f.write(f"Failed: {results['failed']}\n")
        f.write(f"Success rate: {results['successful']/results['total']*100:.1f}%\n\n")
        
        if results['errors']:
            f.write("Errors:\n")
            for error in results['errors']:
                f.write(f"- {error}\n")
    
    print(f"\nDownload summary saved to: {summary_file}")

if __name__ == "__main__":
    main()