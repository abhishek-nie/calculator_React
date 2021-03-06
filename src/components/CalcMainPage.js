import React, { Component } from 'react'
import Output from './Output';
import './CalcMainPage.css'

class CalcMainPage extends Component {
    // helperValue : this helps to find the intermediate value between calclulation
    // result: Gives the final result of calculation
    // aItemsToCalculate: store the input value and once any opertor is pressed, all items are poped and used in calculation
    //classBackGroundTheme: this class is used to change the background color based on button pressed (Light mode/ Dark mode)
    //btnTheme: this class is used to change the background color of button based on (Light mode/ Dark mode) button pressed 
    //scientificBtn: this button shows the square-root btn, square btn and sign-btn 

    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            helperValue: '',
            aItemsToCalculate: [],
            classBackGroundTheme: "outerLayerLightMode",
            btnTheme: "btnChildLightMode",
            scientificBtn: "scientificBtnHide"
        }
    }

    // This method helps to calulate the inputs and show the intermediate input
    // lItem: this states the last/current input given by user
    // str : this helps to create the expression string that is used in eval to find the final result
    // tempArry : this is temporary array that hold the temporary calculation and pushes the calculted value to aItemsToCalculate array.
    clickItem = e => {
        this.setState({
            aItemsToCalculate: [...this.state.aItemsToCalculate, e.target.name],
        })
        var lItem = e.target.name;
        var str = ''
        var tempArry = [];
        for (var i of this.state.aItemsToCalculate) {
            str = str + i
        }
        this.setState({
            helperValue: this.state.helperValue + e.target.name,
            result: this.state.helperValue + e.target.name
        })
        if (lItem === "+" || lItem === "-" || lItem === "*" || lItem === "/") {
            try{
                this.setState({
                    result: eval(str),
                    helperValue: ''
                })
                tempArry.push(String(eval(str)))
                tempArry.push(e.target.name)
                this.setState({
                    aItemsToCalculate: tempArry
                })
            }
            catch(err){
                this.setState({
                    result: err.message + " Error! Clear the input"
                })
            }
      
        }
        else if (lItem === "=") {
            try{
                this.setState({
                    result: eval(str),
                    helperValue: ''
                })
                tempArry.push(String(eval(str)))
                this.setState({
                    aItemsToCalculate: tempArry
                })
            }
            catch(err){
                this.setState({
                    result: err.message + " Error! Clear the input"
                })
            }
           
        }
    }

    // This method clear all the inputs , reset the values ,reset calculation till now and gives a fresh start
    clearAllInputs = () => {
        this.setState({
            result: 0,
            helperValue: '',
            aItemsToCalculate: []
        })
    }

    //Button to change theme to DARK MODE
    changeToDarkMode = () => {
        this.setState({
            classBackGroundTheme: "outerLayerDarkMode",
            btnTheme: "btnChildDarkMode",
            scientificBtn:"scientificBtnShowDarkMode"

        })
    }

    //Button to change theme to LIGHT MODE
    changeToLightMode = () => {
        this.setState({
            classBackGroundTheme: "outerLayerLightMode",
            btnTheme: "btnChildLightMode",
            scientificBtn:"scientificBtnShowLightMode"
        })
    }

    //This method helps to find square of respective input
    onPressSquare = (e) => {
        var sqrt = String(Math.pow(this.state.result, 2));
        var lastItem = this.state.aItemsToCalculate.pop()
        this.setState({
            aItemsToCalculate: [...this.state.aItemsToCalculate, sqrt],
            result: sqrt
        })
    }

    //This method helps to find square root
    onPressSqaureRoot = (e) => {
        var sqrtItem = String(Math.sqrt(this.state.result));
        var lastItem = this.state.aItemsToCalculate.pop()
        this.setState({
            aItemsToCalculate: [...this.state.aItemsToCalculate, sqrtItem],
            result: sqrtItem
        })
    }

    //This method helps to change the sign of the input
    onPressSignChange = () => {
     if(this.state.result > 0){
        var lastItem = this.state.aItemsToCalculate.pop()
         var changeSign = "-" + String(this.state.result)
         this.setState({
            aItemsToCalculate: [...this.state.aItemsToCalculate, changeSign],
            result: changeSign
        })
     }else{
        lastItem = this.state.aItemsToCalculate.pop()
        changeSign = String(Math.abs(this.state.result))
        this.setState({
           aItemsToCalculate: [...this.state.aItemsToCalculate, changeSign],
           result: changeSign
       })
     }
    }

    //This method helps to hide/Unhide the square-root btn, square btn and sign-btn
    onPressScientificBtn = () => {
        this.setState({
            scientificBtn: "scientificBtnShowLightMode"
        })
    }

    render() {
        return (
            <div className={this.state.classBackGroundTheme}>
                <div>
                    <Output className={this.state.btnTheme} result={this.state.result}></Output>
                </div>
                <div className="childElements">
                    <button className={this.state.btnTheme} name="1" onClick={this.clickItem}>1</button>
                    <button className={this.state.btnTheme} name="2" onClick={this.clickItem}>2</button>
                    <button className={this.state.btnTheme} name="3" onClick={this.clickItem}>3</button>
                    <button className={this.state.btnTheme} name="+" onClick={this.clickItem}>Add(+)</button>

                    <button className={this.state.btnTheme} name="4" onClick={this.clickItem}>4</button>
                    <button className={this.state.btnTheme} name="5" onClick={this.clickItem}>5</button>
                    <button className={this.state.btnTheme} name="6" onClick={this.clickItem}>6</button>
                    <button className={this.state.btnTheme} name="-" onClick={this.clickItem}>Subtract(-)</button>


                    <button className={this.state.btnTheme} name="7" onClick={this.clickItem}>7</button>
                    <button className={this.state.btnTheme} name="8" onClick={this.clickItem}>8</button>
                    <button className={this.state.btnTheme} name="9" onClick={this.clickItem}>9</button>
                    <button className={this.state.btnTheme} name="*" onClick={this.clickItem}>Multiply(*)</button>

                    <button className={this.state.btnTheme} onClick={this.clearAllInputs}>Clear</button>
                    <button className={this.state.btnTheme} name="0" onClick={this.clickItem}>0</button>
                    <button className={this.state.btnTheme} name="=" onClick={this.clickItem}>=</button>
                    <button className={this.state.btnTheme} name="/" onClick={this.clickItem}>Divide(/)</button>

                    <button className={this.state.scientificBtn} name="" onClick={this.onPressSignChange}>Sign change</button>
                    <button className={this.state.scientificBtn} name="" onClick={this.onPressSquare}>Square</button>
                    <button className={this.state.scientificBtn} name="sqrt" onClick={this.onPressSqaureRoot}>Square root</button>

                    <button className={this.state.btnTheme} onClick={this.changeToLightMode}>Light Mode</button>
                    <button className={this.state.btnTheme} onClick={this.changeToDarkMode}>Dark Mode</button>
                    <button className={this.state.btnTheme} onClick={this.onPressScientificBtn}>Scientific</button>
                </div>
            </div>
        )
    }
}

export default CalcMainPage
