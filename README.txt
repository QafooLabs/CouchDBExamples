=============
CouchDB & PHP
=============

This folder contains examples, which show the interaction with CouchDB from
PHP using different "drivers". The following use cases should be implemented:

* Create a database

* Create a document

* Update a document

* Create a view

* Request the view

As a domain for the sample applications we are using "Twitter", where people
should be able to post short messages, which are indexed by users and
hash-tags. We also want to know about the most popular hash tags.

Drivers
=======

The following drivers are implemented:

native
    Native PHP calls using the stream wrappers

phpillow
    Using Arbits PHPillow library to access CouchDB

doctrine
    Using the Doctrine CouchDB ODM to access CouchDB

..
   Local Variables:
   mode: rst
   fill-column: 79
   End: 
   vim: et syn=rst tw=79
