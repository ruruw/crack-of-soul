from PIL import Image

def fix_corners(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # If pixel is pure white (or very close to it), make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(img_path, "PNG")

fix_corners("dist/app_icon.png")
fix_corners("app_icon.png")
