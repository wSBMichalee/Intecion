import glob, re

files = glob.glob('src/app/uslugi/*/page.tsx')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 1. Add my-[10px] to Hero section
    content = re.sub(r'w-\[calc\(100%-20px\)\] mx-auto rounded-\[20px\]', r'w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]', content)
    
    # 2. Change grid columns
    content = re.sub(r'lg:grid-cols-\[1fr_0\.9fr\]', 'lg:grid-cols-[1.2fr_1fr]', content)
    content = re.sub(r'lg:grid-cols-\[55%_45%\]', 'lg:grid-cols-[1.2fr_1fr]', content)
    
    # 3. Change max-w-2xl to max-w-[800px]
    content = re.sub(r'lg:max-w-2xl', 'lg:max-w-[800px]', content)
    
    # For marketing/page.tsx
    content = re.sub(r'max-w-\[540px\]', 'max-w-[800px]', content)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Updated {f}")
