'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {

  //default values constructor 
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sub zero';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this._name = name;
    this._age = age;
    console.log(this._name, this._age);
  }

  //template string


  _createClass(Person, [{
    key: 'getGretting',
    value: function getGretting() {
      // return 'Hi' +' '+ this._name
      return 'Hi I am ' + this._name;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this._name + ' is ' + this._age + ' years old';
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  //override constructor
  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this._major = major;
    return _this;
  }
  //net method


  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      return !!this._major;
    }
    //override method

  }, {
    key: 'getDescription',
    value: function getDescription() {
      //get parent description
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
      console.log("testing");
      if (this.hasMajor()) {
        description += 'Thier major is ' + this._major;
        return description;
      }
    }
  }]);

  return Student;
}(Person);

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(name, age, homeLocation) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: 'getGretting',
    value: function getGretting() {
      var greet = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGretting', this).call(this);
      return this.homeLocation ? greet + ' I am  visiting from ' + this.homeLocation : greet;
    }
  }]);

  return Traveler;
}(Person);

var me = new Person('Rayon Hunte', 35);
var rayon = new Student('Rayon Hunte', '35', 'computer science');

var ryan = new Traveler('Ryan Hunte', 8, 'New York');

console.log(me.getGretting());
console.log(me.getDescription());
console.log(rayon.hasMajor());

console.log(ryan.getGretting());
