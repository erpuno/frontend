UNOFRONT: ERP.UNO SaSS/CSS Framework
====================================

Ubuntu 18.04 Install
--------------------

```sh
$ sudo apt update
$ sudo apt -y upgrade
$ sudo apt update
$ sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt -y install nodejs
$ sudo apt -y  install gcc g++ make
```

Generate CSS
------------

```
$ sudo npm -g i gulp
$ npm i
$ gulp build
```

Credits
-------

* Maxim Sokhatsky
* Maksym Kotsiuk
