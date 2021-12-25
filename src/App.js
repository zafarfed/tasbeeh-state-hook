import React from "react";

class App extends React.Component {
    state = {
        count: 0,
        tasbeeh: '😐',
        users:[
            'Zafar',
            'Umar',
            'Nodir'
        ]
    }
    tasbeeh = () => {

        this.setState({
            count: this.state.count + 1,
            tasbeeh:' say: Subhanallah'
        })
        if (this.state.count >= 32) {
            this.setState({
                tasbeeh:' say: Alhamdulillah'
            })
        }
        if (this.state.count>=65){
            this.setState({
                tasbeeh:'say: Allahu Akbar'
            })
        }
        if (this.state.count>=99){
            alert('MashaAllah')
            this.setState({
                tasbeeh:' 😄'
            })
        }
    }

    userDeleted=(deleteItemIndex)=>{
        this.state.users.splice(deleteItemIndex,1)
        this.setState({
            users:this.state.users
        })
    }

    render() {
        const {users} = this.state
        return (
            <div>
                <h1>Electron tasbeeh</h1>
                <h1 className={'tasbeeh'}>{this.state.tasbeeh}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.tasbeeh}> Click</button>

                {users.map((item,index)=>
                <li>{item}<button onClick={()=>this.userDeleted(index)}>Delete User</button>
                </li>
                )}
            </div>
        );
    }
}

export default App;
