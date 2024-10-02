<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/8372/8372114.png" alt="Description of Image" width="250px" />
</div>


# 🌀 **Twiddle** – Snap Your Links into Bite-Sized Brilliance ⚡

**Twiddle** is here to save your long, boring URLs from an eternity of awkward scrolling! 🚀 We take those stretched-out links and shrink them into sleek, shareable gems. Oh, and did we mention you get a shiny QR code, too? Because why not! ✨

### **Twiddle API** is now live! No installation required – just pure URL-shrinking magic at your fingertips. 🎉

---

## 🔗 **Twiddle Magic in Action** ✨

Head over to our sleek frontend and give it a whirl! You’ll be crunching URLs and generating QR codes faster than you can say “Twiddle.” 🍪

🖥️ **Frontend:**  
Want to make your links cute? Visit [**Twiddle**](https://twiddleee.netlify.app/) and get started!

---

## 🛠️ **API Documentation** 🚀✨

The **Twiddle API** lets you crunch URLs and create QR codes programmatically. Perfect for developers who like to keep things short, sweet, and elegant. 🍬

### **Base URL**:  
`https://twiddlee.vercel.app`

### 📖 **Endpoints Overview**

---

### 🔍 **GET Methods: Retrieve Data**  
Use these to fetch info or to let **Twiddle** work its URL-shrinking magic for you!

#### 🚀 **Retrieve Original URL**  
Got a short link? Find your way back to the original with ease.

`GET /:shortUrl`

**Example:**
```bash
GET https://twiddlee.vercel.app/:shortUrl
```
> **Response**: Redirects to the original URL  
> *Example:* Redirects to: `https://example.com`

```javascript
axios.get('https://twiddlee.vercel.app/abcd1234')
  .then(response => window.location.replace(response.data.originalUrl))
  .catch(error => console.error('Couldn’t find that URL:', error));
```

---

#### 📱 **Generate QR Code**  
Because what’s cooler than a QR code for your link? Let your URLs be scannable.

`GET /qryptic/:url`

**Example:**
```bash
GET https://twiddlee.vercel.app/qryptic/:url
```
> **Response**:  
```json
{
  "message": "Here’s your shiny new QR code!",
  "qrCode": "data:image/png;base64,..."
}
```

```javascript
axios.get('https://twiddlee.vercel.app/qryptic/https://example.com')
  .then(response => console.log('QR Code generated!', response.data.qrCode))
  .catch(error => console.error('Error generating QR code:', error));
```

---

### ✉️ **POST Methods: Send Data**  
Need to shorten a URL? Drop it here, and let the shrinking begin!

#### 🔮 **Shorten URL**  
Give us your longest, most unwieldy URL, and we’ll turn it into a pocket-sized wonder.

`POST /crunch`

**Example:**
```bash
POST https://twiddlee.vercel.app/crunch
```
> **Request Body:**
```json
{
  "url": "https://example.com"
}
```

> **Response:**
```json
{
  "originalUrl": "https://example.com",
  "shortUrl": "abcd1234",
  "message": "Your short URL is ready!"
}
```

```javascript
axios.post('https://twiddlee.vercel.app/crunch', { url: 'https://example.com' })
  .then(response => console.log('Short URL created!', response.data))
  .catch(error => console.error('Error creating short URL:', error));
```

---

## 🏆 **Twiddle’s Tiny Treasures**  
Looking for more? We've got some goodies for you!

🚀 Explore Our Postman Collection – Test our API like a pro!  
📦 Check Out the GitHub Repo – See how the magic is made.  
⭐️ Star Us on GitHub – If Twiddle made your life easier, spread the love! We thrive on those stars, just like your favorite video game character. 🌟

---

## 🎩 **Fun Fact**  
**Twiddle** was named after a random burst of inspiration. Why "Twiddle," you ask? Well, like the way we shrink URLs, the name itself is short, snappy, and fun to say. Go on, say it out loud. **Twiddle.** Sounds magical, doesn’t it? 🧙‍♂️✨

---

## **Built With** 💻

- **Frontend**: Deployed on Vercel for blazing fast speeds and buttery smooth performance.  
- **Backend**: A dynamic combo of Express.js and Google Sheets as the storage engine, because spreadsheets are not just for numbers!  
- **QRCode**: For turning those tiny URLs into scannable awesomeness.  
- **ShortUniqueID**: To make sure every short URL stands out and stays unique.  

---

## 🛠️ **Made with ❤️ by Aqib & Konain Raza**  
We’re the wizards behind the curtain, making sure every link gets the Twiddle touch. We had a blast building this and are always open to collaborations and fresh ideas! If you want to work with us, hit us up – let's make magic together! ✨

---

Go ahead, give it a spin, and shrink your next URL in style! ✂️
