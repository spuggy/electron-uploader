# Electron Uploader Project


#### 1. Setup and run local react app

### `npm install`
### `npm start`

#### 2. Setup and run local dummy file uploader server 

### `cd server`
### `npm install`
### `npm start`

#### 3. copy image files to another directory 

copy the files in ./image_files/* to another directory on your disk

#### 4. edit the list of files

edit the list of files in /src/Uploader.js to match the location in 3.

#### 5. implement the onClick

-implement the Upload button in /src/Uploader.js to upload the files in the list.  
-Assume this will involve calling nation fs library functions with electron.
-upload the files to the dummy server (see 2) above to "http://localhost:8080/upload"
handle any security dialogs

#### 6. implement call backs

implement call backs to update the alert component in /src/Uploader.js to display that the file has been uploaded

#### 7. Create build files

- update the sign_and_build_mac.sh with commands to build for mac
- update the sign_and_build_windows.bat with commands to build for windows

