import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import {Col, Grid, Row} from "react-bootstrap";
class AccountsChart extends Component {

    constructor(props){
        super(props);

        this.state = {
            User:
                [
                    {
                        name: 'rehan',
                        salaray: 200000,
                        age: 20,
                        AccountNo: 2097761,
                    }
                    ],
            charData: {
                labels: ['C++','JAVA','REACT'],
                datasets: [
                    {
                        label: 'Accounts',
                        data: [
                            12990,
                            65600,
                            78000
                        ],
                        backgroundColor: [
                           'silver',
                           'lightblue',
                           'lightgreen'
                        ]
                    }
                ]
            }
        }
    }


    render() {
        return (
<div>


    <Grid>
        <Row>
            <Col lg={12}>

                <Pie
                    data={this.state.charData}
                    options={{
                        maintainAspectratio: false
                    }}
                />
            </Col>
        </Row>
    </Grid>


    </div>

        );
    }
}

export default AccountsChart;