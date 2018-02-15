# awesome-api
minimalist api build  with express js to demonstrate the power of systemd

## Requirement :

To run awsome-api you need nodeJS, npm and Mongodb. 

## Installation : 

1. clone the repo : 
```
$ git@github.com:oknozor/awesome-api.git
```
2. init npm : 
```
$ cd awesome-api
$ npm init
```
3. install the dependencies : 
```
$ npm install --save
```

4. run : 
```
node server.js
```
```nodejs``` on ubuntu.

## Systemd unit: 
 
You can run awesome-api as a systemd service, just copy one of the unit file from the repo 
to your distro's systemd.service path:

  * Arch : 
  ``` 
  cp systemd/awesome-api.service /usr/lib/systemd/system/
  ```
  * Ubuntu :
  
  ``` 
  cp systemd/awesome-api.service /etc/systemd/system/awesome-api.service
  ```

And run it: 

```
systemctl start|stop|restart awesome.service
```
  

