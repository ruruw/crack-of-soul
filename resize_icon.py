from PIL import Image, ImageEnhance

def process_icon(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # 1. Darken the image (reduce brightness)
    enhancer = ImageEnhance.Brightness(img)
    img_dark = enhancer.enhance(0.4) # 40% brightness
    
    # 2. Resize the content to make it smaller inside the same canvas
    target_size = int(img.width * 0.5) # 50% smaller
    img_small = img_dark.resize((target_size, target_size), Image.Resampling.LANCZOS)
    
    # 3. Create a new transparent canvas of original size
    new_canvas = Image.new("RGBA", (img.width, img.height), (0, 0, 0, 0))
    
    # 4. Paste the small image in the center
    offset = ((img.width - target_size) // 2, (img.height - target_size) // 2)
    new_canvas.paste(img_small, offset, img_small)
    
    new_canvas.save(output_path, "PNG")

process_icon("dist/app_icon.png", "dist/app_icon.png")
process_icon("dist/app_icon.png", "app_icon.png")
