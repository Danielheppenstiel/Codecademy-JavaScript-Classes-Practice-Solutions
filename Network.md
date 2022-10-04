# Network

### Instructions

Create a Class with the name `class Network` to track how much total data and how many users each network has. Each user on average deducts 5 units from the network's total data. To watch a movie the network must have at least 10 remaining units of data.

Add a method `movieTime()` to the Network class that returns `true` if there is enough data to watch a movie, `false` if there isn't.

### Summary

For this challenge I started by adding the constructor method with two parameters, data and users.

```
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }
```
I then created the `movieTime()` method following the constructor method within the Network class.

```
    movieTime() {
        let userData = this.users * 5;

        if (this.data - userData >= 10) {
            return true;
        } else {
            return false;
        }
    }
```

Within the `movieTime()` method, I created a variable `userData` to store the total amount of data being used by people on the network. I implemented an `if` statement to subtract the total data being used from the total data available on the network.  

**Solution Test**

To test my solution I created an instance of the `Network` class, with `100` as an agrument for the `data` parameter and `5` as an argument for the `users` parameter.

```
const classroom = new Network(100, 5);

console.log(classroom.movieTime());
```

### Resources

- [Codecademy](https://www.codecademy.com/)
- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)