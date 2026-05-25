import os
import json

def generate_image_json(target_folder, output_json_path):
#     valid_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff', '.svg', .)
    artwork_list = []

    try:
        files = os.listdir(target_folder)
    except FileNotFoundError:
        print(f"Error: The folder '{target_folder}' does not exist.")
        return

    for filename in files:
#         if filename.lower().endswith(valid_extensions):
            image_data = {
                "title": "",
                "description": "",
                "category": "",
                "file-name": filename,
                "tags": ""
            }
            artwork_list.append(image_data)

    with open(output_json_path, 'w', encoding='utf-8') as json_file:
        json.dump(artwork_list, json_file, indent=2, ensure_ascii=False)

    print(f"JSON saved to: {output_json_path}")

# --- CONFIGURATION ---
# Change '.' to the path of your images folder if it's not in the same directory.
# For example: TARGET_DIR = "C:/Users/Name/Pictures/ProjectImages"
TARGET_DIR = "./"
OUTPUT_FILE = "artworks.json"

if __name__ == "__main__":
    generate_image_json(TARGET_DIR, OUTPUT_FILE)


## Future Changes:
## Maybe add a png equivalent of pdf, just for the preview.
## Label it as [fileNAME]_preview.png, so that we can say if pdf, then show png, but when clicking on the png, show pdf.
