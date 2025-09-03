# Content Editing Guide for 1000 Madleens to Gaza Website

This guide will help you easily update the website content without needing any technical knowledge. All website content is now stored in a single file called `content.json`, making it simple to update text, links, and information across the entire site.

## 📁 Where to Find the Content File

The content file is located at: `thousand-madleens-website/content.json`

## 🛠️ How to Edit Content

### Step 1: Open the Content File

1. Navigate to the `thousand-madleens-website` folder
2. Find and open the file named `content.json`
3. You can edit this file using any text editor (like Notepad, TextEdit, or VS Code)

### Step 2: Understanding the File Structure

The content file is organized into sections that correspond to different parts of the website:

```
content.json
├── site (general site information)
├── navigation (header menu and buttons)
├── hero (main banner section)
├── mission (mission cards)
├── goals (goals section)
├── map (interactive map locations)
├── advocacy (advocacy section)
├── roles (how to contribute tabs)
├── faq (frequently asked questions)
├── news (news articles)
├── socialMedia (social media links)
├── disclaimer (legal disclaimer)
└── footer (footer links and information)
```

## 📝 Common Editing Tasks

### ✏️ Updating Text Content

**To change the main campaign message:**

```json
"site": {
    "campaignMessage": "Your new campaign message here"
}
```

**To update the hero section:**

```json
"hero": {
    "title": "Your new title",
    "subtitle": "Your new subtitle",
    "tagline": "Your new tagline",
    "description": "Your new description"
}
```

### 🔗 Updating Links

**To change navigation buttons:**

```json
"navigation": {
    "buttons": [
        {
            "label": "Join the Movement",
            "href": "https://your-new-link.com"
        }
    ]
}
```

**To update social media links:**

```json
"socialMedia": {
    "platforms": [
        {
            "name": "Twitter",
            "href": "https://your-twitter-link.com"
        }
    ]
}
```

### 🗺️ Managing Map Locations

**To add a new country to the map:**

```json
"map": {
    "locations": [
        {
            "id": 7,
            "country": "New Country Name",
            "ships": 0,
            "status": "Planning",
            "statusColor": "bg-yellow-100 text-yellow-800",
            "lat": 40.7128,
            "lng": -74.0060,
            "color": "blue",
            "joinLink": "https://your-country-link.com"
        }
    ]
}
```

**To update ship counts:**
Simply change the `"ships": 0` number to the new count.

### 📰 Managing News Articles

**To add a new news article:**

```json
"news": {
    "articles": [
        {
            "id": 6,
            "title": "Your News Title",
            "image": "https://your-image-url.com/image.jpg",
            "description": "Your news description",
            "source": "News Source",
            "sourceIcon": "Globe",
            "badge": "Breaking News",
            "badgeColor": "bg-red-600",
            "borderColor": "border-red-200",
            "buttonColor": "border-red-600 text-red-600 hover:bg-red-50",
            "link": "https://your-news-link.com"
        }
    ]
}
```

**To update existing news:**
Find the article by its `"id"` and modify the fields you want to change.

### ❓ Managing FAQ

**To add a new FAQ:**

```json
"faq": {
    "questions": [
        {
            "question": "Your new question?",
            "answer": "Your detailed answer here."
        }
    ]
}
```

## 🎨 Styling Options

### Status Colors for Map Locations

- `"bg-green-100 text-green-800"` - Green (Ready/Organizing)
- `"bg-blue-100 text-blue-800"` - Blue (Preparing)
- `"bg-yellow-100 text-yellow-800"` - Yellow (Planning)
- `"bg-red-100 text-red-800"` - Red (Urgent)

### Badge Colors for News

- `"bg-green-600"` - Green
- `"bg-blue-600"` - Blue
- `"bg-red-600"` - Red
- `"bg-purple-600"` - Purple
- `"bg-yellow-600"` - Yellow

### Country Colors for Map

- `"red"` - Red markers
- `"green"` - Green markers
- `"blue"` - Blue markers
- `"black"` - Black markers

## ⚠️ Important Safety Tips

### DO:

✅ Always make a backup copy of `content.json` before editing
✅ Test your changes on a development version first if possible
✅ Keep the JSON structure intact (don't remove commas, brackets, or quotes)
✅ Use proper quotation marks (`"` not `'`)
✅ Save the file with UTF-8 encoding

### DON'T:

❌ Remove or modify the structure (brackets, commas, colons)
❌ Use single quotes (`'`) instead of double quotes (`"`)
❌ Delete required fields like `"id"`, `"title"`, etc.
❌ Break the JSON format (use a JSON validator if unsure)

## 🔧 Validation and Testing

### Before Publishing Changes:

1. **Validate JSON Format**: Use an online JSON validator (like jsonlint.com) to check your file
2. **Check Links**: Ensure all URLs are working and properly formatted
3. **Review Content**: Double-check spelling and grammar
4. **Test Locally**: If possible, test the website locally before publishing

### JSON Validation Checklist:

- [ ] All opening brackets `{` have closing brackets `}`
- [ ] All opening square brackets `[` have closing square brackets `]`
- [ ] All text values are wrapped in double quotes `"`
- [ ] Commas separate items (but no comma after the last item in a list)
- [ ] No trailing commas at the end of objects or arrays

## 📞 Common Issues and Solutions

### Issue: Website shows error after editing

**Solution**: Check JSON format using a validator. Look for missing commas, quotes, or brackets.

### Issue: Links not working

**Solution**: Ensure URLs start with `http://` or `https://` and are properly formatted.

### Issue: Images not displaying

**Solution**: Verify image URLs are accessible and properly formatted.

### Issue: Text not updating on website

**Solution**: Clear browser cache or try viewing in an incognito/private window.

## 📋 Quick Reference - Key Sections

| Section                 | What it Controls                 |
| ----------------------- | -------------------------------- |
| `site.campaignMessage`  | Social media sharing message     |
| `hero.title`            | Main website title               |
| `hero.description`      | Main description text            |
| `navigation.buttons`    | Header buttons (Join, Donate)    |
| `map.locations`         | Countries and ship counts on map |
| `news.articles`         | News carousel content            |
| `faq.questions`         | FAQ section                      |
| `socialMedia.platforms` | Social media links               |
| `footer.sections`       | Footer links and information     |

## 🆘 Getting Help

If you encounter issues:

1. Double-check the JSON format using an online validator
2. Compare your changes with the original backup
3. Look for missing commas, quotes, or brackets
4. Contact your technical team member for assistance

## 📝 Example: Complete Edit Workflow

1. **Backup**: Copy `content.json` to `content-backup.json`
2. **Edit**: Make your changes to `content.json`
3. **Validate**: Check the file with a JSON validator
4. **Test**: Preview changes if possible
5. **Publish**: Upload the updated file
6. **Verify**: Check the live website

Remember: Small, incremental changes are safer than large edits all at once!
