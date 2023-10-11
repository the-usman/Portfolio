import React from 'react'
import Shery from 'sheryjs'
import Percentage from './Percentage'
import Chart from './Chart'
import cImage from '../images/c++.jpeg'
import JsImage from '../images/JavaScript-logo.png'
import pythonImage from '../images/python.jpeg'
import dataAnalysisImage from '../images/dataA.jpeg'
import reactImage from '../images/react.png'
import machineLearningImage from '../images/machinelearning.png'

function Section2() {
    
    const dataC = {
        labels: ['January', 'February', 'March', 'April', 'May', "June", "August", "Sep"],
        datasets: [
            {
                label: 'C++ Progress',
                data: [50, 60, 80, 81, 86, 87, 56, 89],
                borderColor: 'rgba(52, 69, 61, 1)',
                fill: true,
                backgroundColor: 'rgba(52, 69, 61, 0.3)',
            },
        ],
    };

    const dataJs = {
        labels: ['January', 'Februray', 'March', 'April', 'May', 'June', 'August', 'Sep'],
        datasets: [
            {
                label: 'JavaScript Progress',
                data: [20, 40, 45, 60, 70, 75, 78, 89],
                borderColor: 'rgba(52, 69, 61, 1)',
                fill: true,
                backgroundColor: 'rgba(52, 69, 61, 0.3)',
            },
        ],
    };

    const dataReact = {
        labels: ['January', 'Februray', 'March', 'April', 'May', 'June', 'August', 'Sep'],
        datasets: [
            {
                label: 'React Js Progress',
                data: [0, 0, 0, 0, 0, 20, 68, 79],
                borderColor: 'rgba(52, 69, 61, 1)',
                fill: true,
                backgroundColor: 'rgba(52, 69, 61, 0.3)',
            },
        ],
    };


    const datapython = {
        labels: ['January', 'Februray', 'March', 'April', 'May', 'June', 'August', 'Sep'],
        datasets: [
            {
                label: 'Python Progress',
                data: [0, 20, 40, 50, 20, 20, 78, 83],
                borderColor: 'rgba(52, 69, 61, 1)',
                fill: true,
                backgroundColor: 'rgba(52, 69, 61, 0.3)',
            },
        ],
    };
    const dataAnalysis = {
        labels: ['January', 'Februray', 'March', 'April', 'May', 'June', 'August', 'Sep'],
        datasets: [
            {
                label: 'Data Analysis Progress',
                data: [0, 0, 0, 0, 0, 0, 8, 15],
                borderColor: 'rgba(52, 69, 61, 1)',
                fill: true,
                backgroundColor: 'rgba(52, 69, 61, 0.3)',
            },
        ],
    };
    const mechinelearning = {
        labels: ['January', 'Februray', 'March', 'April', 'May', 'June', 'August', 'Sep'],
        datasets: [
            {
                label: 'Machine Learning Progress',
                data: [0, 0, 0, 0, 0, 0, 0, 25],
                borderColor: 'rgba(52, 69, 61, 1)',
                fill: true,
                backgroundColor: 'rgba(52, 69, 61, 0.3)',
            },
        ],
    };

    Shery.imageEffect(".img", {
        style: 3,
        debug: true,
        config: {
          uFrequencyX: { value: 100, range: [0, 100] },
          uFrequencyY: { value: 44.86, range: [0, 100] },
          uFrequencyZ: { value: 100, range: [0, 100] },
          uTime: { value: 37.14299999999965 },
        },
      });


    return (
        <div className='section2'>
            <h1>
                C++ Progress
            </h1>
            <div className="itemContainer">

                <Percentage src={cImage} percentage={67} />
                <Chart data={dataC} />
            </div>
            <h1>
                Javescript Progress
            </h1>
            <div className="itemContainer">
                <Percentage src={JsImage} percentage={60} />
                <Chart data={dataJs} />
            </div>
            <h1>
                React Js Progress
            </h1>
            <div className="itemContainer">
                <Percentage src={reactImage} percentage={50} />
                <Chart data={dataReact} />
            </div>
            <h1>
                Python Progress
            </h1>
            <div className="itemContainer">
                <Percentage src={pythonImage} percentage={45} />
                <Chart data={datapython} />
            </div>
            <h1>
                Data Analysis Progress
            </h1>
            <div className="itemContainer">
                <Percentage src={dataAnalysisImage} percentage={20} />
                <Chart data={dataAnalysis} />
            </div>
            <h1>
                Machine Learning Progress
            </h1>
            <div className="itemContainer">
                <Percentage src={machineLearningImage} percentage={27} />
                <Chart data={mechinelearning} />
            </div>
            <div className="img">
                <img src={machineLearningImage} alt="" />
            </div>
        </div>
    )
}

export default Section2
