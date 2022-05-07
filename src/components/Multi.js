import react from "react";

class Multi1 extends react.Component{
    constructor(){
        super()
        this.state = {
            emp : [{name:'omkar',sal:40000},{name:'raju',sal:50000}]
        }
    }
    render(){
        return(
            <div>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {
                        this.state.emp.map(function(em){
                            return <tr>
                                <td>{em.name}</td>
                                <td>{em.sal}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Multi1;