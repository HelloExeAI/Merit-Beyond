import os
import sys
from PIL import Image
from rembg import remove

def main():
    input_path = "/Users/farooq/Downloads/Merit & Beyond Liquid Gold Logo 2.png"
    output_dir = "/Users/farooq/Desktop/Merit and Beyond/public/images"
    os.makedirs(output_dir, exist_ok=True)

    print(f"Loading input: {input_path}")
    input_image = Image.open(input_path).convert("RGBA")
    print(f"Image size: {input_image.size}")

    print("Running AI background removal (rembg)...")
    # Using rembg to remove the background with alpha matting
    transparent_image = remove(
        input_image,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=5
    )

    master_path = os.path.join(output_dir, "logo-transparent-master.png")
    transparent_image.save(master_path, "PNG")
    print(f"Saved master transparent image: {master_path}")

    # Also trim any extra empty transparent borders
    bbox = transparent_image.getbbox()
    if bbox:
        trimmed = transparent_image.crop(bbox)
        trimmed.save(os.path.join(output_dir, "logo-transparent-trimmed.png"), "PNG")
        print(f"Saved trimmed transparent image: bbox = {bbox}")

    # Now crop individual components from the master transparent image
    # In original 1672 x 941:
    # 1. Monogram (top MB emblem):
    # Monogram box: left ~370, top ~15, right ~1290, bottom ~610
    monogram = transparent_image.crop((370, 15, 1290, 610))
    mono_bbox = monogram.getbbox()
    if mono_bbox:
        monogram = monogram.crop(mono_bbox)
    monogram.save(os.path.join(output_dir, "logo-monogram-transparent.png"), "PNG")
    print(f"Saved logo-monogram-transparent.png: size = {monogram.size}")

    # 2. Wordmark ("Merit & Beyond" text):
    # Wordmark box: left ~100, top ~605, right ~1580, bottom ~890
    wordmark = transparent_image.crop((100, 605, 1580, 890))
    word_bbox = wordmark.getbbox()
    if word_bbox:
        wordmark = wordmark.crop(word_bbox)
    wordmark.save(os.path.join(output_dir, "logo-wordmark-transparent.png"), "PNG")
    print(f"Saved logo-wordmark-transparent.png: size = {wordmark.size}")

    # 3. Create a crisp Horizontal Lockup:
    # Monogram height ~160, Wordmark height ~110
    mono_h = 160
    mono_w = int(monogram.width * (mono_h / monogram.height))
    mono_resized = monogram.resize((mono_w, mono_h), Image.Resampling.LANCZOS)

    word_h = 100
    word_w = int(wordmark.width * (word_h / wordmark.height))
    word_resized = wordmark.resize((word_w, word_h), Image.Resampling.LANCZOS)

    spacing = 30
    lockup_w = mono_w + spacing + word_w + 20
    lockup_h = max(mono_h, word_h) + 20

    horizontal_lockup = Image.new("RGBA", (lockup_w, lockup_h), (0, 0, 0, 0))
    horizontal_lockup.paste(mono_resized, (10, (lockup_h - mono_h) // 2), mono_resized)
    horizontal_lockup.paste(word_resized, (10 + mono_w + spacing, (lockup_h - word_h) // 2 + 5), word_resized)

    h_bbox = horizontal_lockup.getbbox()
    if h_bbox:
        horizontal_lockup = horizontal_lockup.crop(h_bbox)
    horizontal_lockup.save(os.path.join(output_dir, "logo-horizontal-transparent.png"), "PNG")
    print(f"Saved logo-horizontal-transparent.png: size = {horizontal_lockup.size}")

    # 4. Generate high-res Favicon & Apple Icon from the transparent monogram
    fav_size = 192
    fav = Image.new("RGBA", (fav_size, fav_size), (0, 0, 0, 0))
    mono_fav_h = int(fav_size * 0.9)
    mono_fav_w = int(monogram.width * (mono_fav_h / monogram.height))
    mono_fav_resized = monogram.resize((mono_fav_w, mono_fav_h), Image.Resampling.LANCZOS)
    fav.paste(mono_fav_resized, ((fav_size - mono_fav_w) // 2, (fav_size - mono_fav_h) // 2), mono_fav_resized)
    fav.save("/Users/farooq/Desktop/Merit and Beyond/public/favicon.png", "PNG")
    fav.save("/Users/farooq/Desktop/Merit and Beyond/public/apple-touch-icon.png", "PNG")
    print("Saved favicons.")

    print("AI background removal and asset generation COMPLETE!")

if __name__ == "__main__":
    main()
