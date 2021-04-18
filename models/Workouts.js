const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter a type of workout"
    },
    name: {
        type: String,
        required: "Enter an exercise"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
    reps: {
        type: Number,
        required: "Enter an amount"
    },
    sets: {
        type: Number,
        required: "Enter an amount"
    }
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;