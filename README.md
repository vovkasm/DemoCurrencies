# DemoCurrencies

## Run on iOS

```sh
npm ci
open ios/DemoCurrencies.xcworkspace # opens Xcode
npm start # starts bundler
# Go to Xcode and run application
```

## Upgrade dependencies

Main part.

```sh
npm outdated # analyze, modify package.json as appropriate
rm -rf node_modules package-lock.json
npm i
# update code if needed
npm test # ensure tests ok
```

If deps with native code was upgraded.

iOS
```sh
cd ios
bundle exec pod outdated # analyze
# If new version of React, for ex.
bundle exec pod update React yoga
```
