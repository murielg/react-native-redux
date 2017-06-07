# Albums

- Itunes Search API
- Fetch API

### Caveats

- Due to App Transport Security, added in iOS9, HTTP requests are rejected if they are not sent over HTTPS, resulting in blocked traffic. I have set App Transport Security Settings to allow arbitrary loads.  

```
  // `Info.plist` 
  <key>NSAllowsArbitraryLoads</key>
  <true/>

```
