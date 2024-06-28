# LogRocket Capacitor Memory Leak Reproduction

This is a Create React App project with Capacitor installed. It is running LogRocket as well.

To test this, run:

```
npm install
npm run build
npx cap sync ios
npx cap open ios
```

Then, run the app in Xcode.
On the homepage, click on the "Go to app" button.

Then, you'll be on a page with a list of 1,000 items with IonToggles next to them.
Press the button on top to render a new 1,000 items.

After pressing the button many times (~20 for an iPhone 12) the memory will crash, causing the app to restart and sending you back to the first page.