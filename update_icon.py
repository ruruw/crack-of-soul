from PIL import Image

# Load the newly generated JPG
img = Image.open("/Users/meru/.gemini/antigravity-ide/brain/d58887c2-aac0-4b40-9598-ae0502c64af2/tcos_new_icon_1787499532294.jpg")

# Convert to RGBA for standard PNG format
img = img.convert("RGBA")

# Resize to standard 512x512 as requested in manifest, or keep 1024x1024. 
# It's 1024x1024 by default from gemini image generator. Let's keep it 1024.
img.save("dist/app_icon.png", "PNG")
img.save("app_icon.png", "PNG")

print("Icon updated!")
