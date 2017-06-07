# Albums

- Itunes Search API
- Fetch API

### Caveats

- Due to App Transport Security, added in iOS9, HTTP requests are rejected if they are not sent over HTTPS, resulting in blocked traffic. I have set App Transport Security Settings to allow arbitrary loads.  

```
  // `Info.plist` 

  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <plist version="1.0">
  <true/>
</plist>

```
