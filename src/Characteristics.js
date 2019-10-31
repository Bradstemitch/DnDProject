import React, { Component } from 'react';
import './App.css';

class Characteristics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strengthValue: 8,
            dexterityValue: 8,
            constitutionValue: 8,
            intelligenceValue: 8,
            wisdomValue: 8,
            charismaValue: 8,
            pointBuyUsed: 0,
        };
    }



    findModifier = (value) => {
        if (value % 2 !== 0) {
            value = value - 1;;
        }
        value = ((value - 10) / 2);
        if (value > 0) {


            value = "+" + value;
        };
        return value;
    }

    increaseStrength = () => {
        if (this.state.strengthValue < 30) {
            this.setState({ strengthValue: this.state.strengthValue + 1 });
            this.increasePointBuyUsed(this.state.strengthValue);
        }
    }
    decreaseStrength = () => {
        if (this.state.strengthValue > 1) {
            this.setState({ strengthValue: this.state.strengthValue - 1 });
            this.decreasePointBuyUsed(this.state.strengthValue);
        }
    }
    increaseDexterity = () => {
        if (this.state.dexterityValue < 30) {
            this.setState({ dexterityValue: this.state.dexterityValue + 1 });
            this.increasePointBuyUsed(this.state.dexterityValue);
        }
    }
    decreaseDexterity = () => {
        if (this.state.dexterityValue > 1) {
            this.setState({ dexterityValue: this.state.dexterityValue - 1 });
            this.decreasePointBuyUsed(this.state.dexterityValue);
        }
    }
    increaseConstitution = () => {
        if (this.state.constitutionValue < 30) {
            this.setState({ constitutionValue: this.state.constitutionValue + 1 });
            this.increasePointBuyUsed(this.state.constitutionValue);
        }
    }
    decreaseConstitution = () => {
        if (this.state.constitutionValue > 1) {
            this.setState({ constitutionValue: this.state.constitutionValue - 1 });
            this.decreasePointBuyUsed(this.state.constitutionValue);
        }
    }
    increaseIntelligence = () => {
        if (this.state.intelligenceValue < 30) {
            this.setState({ intelligenceValue: this.state.intelligenceValue + 1 });
            this.increasePointBuyUsed(this.state.intelligenceValue);
        }
    }
    decreaseIntelligence = () => {
        if (this.state.intelligenceValue > 1) {
            this.setState({ intelligenceValue: this.state.intelligenceValue - 1 });
            this.decreasePointBuyUsed(this.state.intelligenceValue);
        }
    }
    increaseWisdom = () => {
        if (this.state.wisdomValue < 30) {
            this.setState({ wisdomValue: this.state.wisdomValue + 1 });
            this.increasePointBuyUsed(this.state.wisdomValue);
        }
    }
    decreaseWisdom = () => {
        if (this.state.wisdomValue > 1) {
            this.setState({ wisdomValue: this.state.wisdomValue - 1 });
            this.decreasePointBuyUsed(this.state.wisdomValue);
        }
    }
    increaseCharisma = () => {
        if (this.state.charismaValue < 30) {
            this.setState({ charismaValue: this.state.charismaValue + 1 });
            this.increasePointBuyUsed(this.state.charismaValue);
        }
    }
    decreaseCharisma = () => {
        if (this.state.strengthValue > 1) {
            this.setState({ charismaValue: this.state.charismaValue - 1 });
            this.decreasePointBuyUsed(this.state.charismaValue);
        }
    }


    increasePointBuyUsed = (value) => {
        value++;
        if (value > 8 && value < 14) {
            this.setState({ pointBuyUsed: this.state.pointBuyUsed + 1 });
        } else if (value >= 14) {
            if (value % 2 !== 1) {
                value++;
            }
            this.setState({ pointBuyUsed: this.state.pointBuyUsed + ((value - 11) / 2) });
        } else if (value <= 8) {
            if (value % 2 !== 1) {
                value--;
            }
            this.setState({ pointBuyUsed: this.state.pointBuyUsed - ((value - 9) / 2) });
        }
    }

    decreasePointBuyUsed = (value) => {
        value--;
        if (value >= 8 && value < 13) {
            this.setState({ pointBuyUsed: this.state.pointBuyUsed - 1 });
        } else if (value >= 13) {
            if (value % 2 !== 0) {
                value++;
            }
            this.setState({ pointBuyUsed: this.state.pointBuyUsed - ((value - 10) / 2) });
        } else if (value < 8) {
            if (value % 2 !== 0) {
                value--;
            }
            this.setState({ pointBuyUsed: this.state.pointBuyUsed + ((value - 8) / 2) });
        }
    }
    render() {
        return (
            <table id='characteristsicsTable'>
                <thead>
                    <tr>
                        <th colSpan="6">Charicteristics</th>
                    </tr>
                    <tr>
                        <td id="characteristic">Strength</td>
                        <td id="characteristic">Dexterity</td>
                        <td id="characteristic">Constitution</td>
                        <td id="characteristic">Intelligence</td>
                        <td id="characteristic">Wisdom</td>
                        <td id="characteristic">Charisma</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.strengthValue + " (" + this.findModifier(this.state.strengthValue) + ")"}</td>
                        <td>{this.state.dexterityValue + " (" + this.findModifier(this.state.dexterityValue) + ")"}</td>
                        <td>{this.state.constitutionValue + " (" + this.findModifier(this.state.constitutionValue) + ")"}</td>
                        <td>{this.state.intelligenceValue + " (" + this.findModifier(this.state.intelligenceValue) + ")"}</td>
                        <td>{this.state.wisdomValue + " (" + this.findModifier(this.state.wisdomValue) + ")"}</td>
                        <td>{this.state.charismaValue + " (" + this.findModifier(this.state.charismaValue) + ")"}</td>
                    </tr>
                    <tr>
                        <td><button onClick={this.increaseStrength}>^</button></td>
                        <td><button onClick={this.increaseDexterity}>^</button></td>
                        <td><button onClick={this.increaseConstitution}>^</button></td>
                        <td><button onClick={this.increaseIntelligence}>^</button></td>
                        <td><button onClick={this.increaseWisdom}>^</button></td>
                        <td><button onClick={this.increaseCharisma}>^</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={this.decreaseStrength}>V</button></td>
                        <td><button onClick={this.decreaseDexterity}>V</button></td>
                        <td><button onClick={this.decreaseConstitution}>V</button></td>
                        <td><button onClick={this.decreaseIntelligence}>V</button></td>
                        <td><button onClick={this.decreaseWisdom}>V</button></td>
                        <td><button onClick={this.decreaseCharisma}>V</button></td>
                    </tr>
                    <tr>
                        <th colSpan="6">{this.state.pointBuyUsed}</th>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Characteristics;