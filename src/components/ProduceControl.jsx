import Months from "./Months";
import React from "react";

const availableProduce = [
    {
        month: "January",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Turnips"
        ]
    },
    {
        month: "February",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes"
        ]
    },
    {
        month: "March",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes"
        ]
    },
    {
        month: "April",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Asparagus",
            "Garlic",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Potatoes"
        ]
    },
    {
        month: "May",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Asparagus",
            "Cauliflower",
            "Garlic",
            "Lettuce",
            "Potatoes",
            "Radishes"
        ]
    },
    {
        month: "June",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Blackberries",
            "Cherries",
            "Raspberries",
            "Strawberries",
            "Asparagus",
            "Broccoli",
            "Cauliflower",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Potatoes",
            "Radishes",
            "Squash"
        ]
    },
    {
        month: "July",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Apricots",
            "Blackberries",
            "Blueberries",
            "Cherries",
            "Melons",
            "Nectarines",
            "Peaches",
            "Raspberries",
            "Strawberries",
            "Tomatoes",
            "Beets",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
        ]
    },
    {
        month: "August",
        selection: [
            "Apples",
            "Apricots",
            "Blackberries",
            "Blueberries",
            "Cherries",
            "Melons",
            "Nectarines",
            "Peaches",
            "Pears",
            "Plums",
            "Raspberries",
            "Rhubarb",
            "Strawberries",
            "Tomatoes",
            "Beets",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
        ]
    },
    {
        month: "September",
        selection: [
            "Apples",
            "Blueberries",
            "Grapes",
            "Melons",
            "Peaches",
            "Pears",
            "Plums",
            "Raspberries",
            "Tomatoes",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
        ]
    },
    {
        month: "October",
        selection: [
            "Apples",
            "Grapes",
            "Hazelnuts",
            "Melons",
            "Peaches",
            "Pears",
            "Tomatoes",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Pumpkins",
            "Radishes",
            "Squash",
            "Turnips"
        ]
    },
    {
        month: "November",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Broccoli",
            "Carrots",
            "Cauliflower",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Squash",
            "Turnips"
        ]
    },
    {
        month: "December",
        selection: [
            "Apples",
            "Hazelnuts",
            "Pears",
            "Broccoli",
            "Carrots",
            "Cauliflower",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Turnips"
        ]
    }
];

class Produce extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            monthCounter: 0
        };
    }

    handleClick = () => {
        if (this.state.monthCounter > 10) {
            this.setState({ monthCounter: 0 });
        } else {
            this.setState(prevState => ({
                monthCounter: prevState.monthCounter + 1
            }));
        }
    }
    render() {
        let visibleMonth = availableProduce[this.state.monthCounter]

        return (
            <>
                <div id="produceInfo">
                    <h3>Produce available by Month</h3>
                    <button className="btn btn-danger" onClick={this.handleClick}>Next Month</button>
                    <Months
                        month={visibleMonth.month}
                        selection={visibleMonth.selection}
                        key={this.state.monthCounter} />
                </div>
            </>
        )
    }
}
export default Produce;