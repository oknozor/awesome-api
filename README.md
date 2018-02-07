# tiny-api
minimalist api build  with express js to demonstrate the power of systemd

## Requirement :

To run tiny-api you need nodeJS, npm and Mongodb. 

## Installation : 

1. clone the repo : 
```
$ git@github.com:oknozor/tiny-api.git
```
2. init npm : 
```
$ cd tiny-api
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

## Systemd unit: 
 
You can run tiny-api as a systemd service, just copy one of the unit file from the repo 
to your distro's systemd.service path:

  * Arch : 
  ``` 
  cp /systemd/tiny-api{x}.service /usr/lib/systemd/system/
  ```
  * Other distro : 
  TO DO 

And run it: 

```
systemctl start|stop|restart tiny-api{x}.service
```
  

