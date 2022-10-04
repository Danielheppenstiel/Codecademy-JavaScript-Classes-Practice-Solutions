class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }

    movieTime() {
        let userData = this.users * 5;

        if (this.data - userData >= 10) {
            return true;
        } else {
            return false;
        }
    }

}

const classroom = new Network(100, 5);

console.log(classroom.movieTime());