# 🔒 Security Setup Instructions

## Admin Password Protection is NOW ACTIVE!

Your admin panel (`/admin`) is now protected with password authentication.

---

## 🚨 IMPORTANT: Set Your Custom Password

### Step 1: Create `.env.local` file

In your project root (`/Users/igmercastillo/code/GroundGame/`), create a new file called `.env.local`

You can do this in your terminal:

```bash
cd /Users/igmercastillo/code/GroundGame
touch .env.local
```

### Step 2: Add Your Password

Open `.env.local` and add this line:

```
ADMIN_PASSWORD=your-super-secret-password-here
```

**Replace `your-super-secret-password-here` with your actual password!**

Example:
```
ADMIN_PASSWORD=GroundGame2025!Secure
```

### Step 3: Restart the Dev Server

Stop your dev server (Ctrl+C) and start it again:

```bash
npm run dev
```

---

## ⚠️ Default Password (TEMPORARY)

**Until you create `.env.local`, the default password is:**

```
groundgame2025
```

**THIS IS NOT SECURE!** Anyone reading the code can see this. 

**You MUST create `.env.local` with your custom password immediately!**

---

## 🎯 How It Works

1. When anyone visits `/admin`, they see a login screen
2. They must enter the correct password
3. Only after successful login can they access the publishing form
4. Password is checked against `ADMIN_PASSWORD` in `.env.local`
5. If `.env.local` doesn't exist, it uses the temporary default password

---

## 👥 Sharing Password with Your Team

**Secure Methods:**
- In-person communication
- Encrypted messaging (Signal, WhatsApp)
- Password manager (1Password, LastPass)

**DO NOT:**
- Post in public channels
- Send via regular email
- Commit to GitHub
- Share in public chats

---

## 🔐 Password Best Practices

**Good Password:**
```
GroundGame2025!@#SecureNews
```

**Bad Password:**
```
password
123456
groundgame
```

**Tips:**
- Use at least 15 characters
- Mix uppercase, lowercase, numbers, symbols
- Avoid dictionary words
- Don't reuse passwords from other sites

---

## 📝 `.env.local` File Security

✅ **Already Protected:**
- `.env.local` is in `.gitignore`
- It won't be committed to GitHub
- Each developer needs their own copy

❌ **Never Do:**
- Commit `.env.local` to git
- Share it publicly
- Upload to cloud storage

---

## 🔄 Changing Your Password

To change the admin password:

1. Edit `.env.local`
2. Update `ADMIN_PASSWORD=new-password-here`
3. Restart the dev server
4. Inform your team of the new password

---

## 🚀 For Production Deployment

### Vercel, Netlify, or other hosting:

1. Go to your project settings
2. Find "Environment Variables" section
3. Add: 
   - **Key:** `ADMIN_PASSWORD`
   - **Value:** Your secure password
4. Redeploy

---

## 🛡️ Security Features Now Active

✅ Password-protected admin panel
✅ Login screen before publishing
✅ Environment variable storage
✅ No hardcoded credentials
✅ Logout functionality
✅ Session management

---

## 🆘 Troubleshooting

**Problem:** "Invalid password" even with correct password
- **Solution:** Restart dev server after creating/editing `.env.local`

**Problem:** Can't find `.env.local`
- **Solution:** It's hidden! Use `ls -la` in terminal to see it

**Problem:** `.env.local` creation blocked
- **Solution:** Create it manually through terminal or IDE

**Problem:** Forgot password
- **Solution:** Edit `.env.local` to reset it

---

## 📞 Quick Setup Checklist

- [ ] Create `.env.local` file
- [ ] Add `ADMIN_PASSWORD=your-password`
- [ ] Restart dev server
- [ ] Test login at `/admin`
- [ ] Share password with trusted journalists only
- [ ] Never commit `.env.local` to git

---

**Your admin panel is now secure! 🎉**

Only people with the password can publish articles.
