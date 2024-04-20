import React from "react";
import { ReactElement } from "react";
import "./ExpandDiv.css"

type ExpandDivProp={
    unExpandedMsg:string,
    expandedMsg:string
}

type ExpandDivState={
    isExpanded:boolean,
}


export default class ExpandDiv extends React.Component<ExpandDivProp,ExpandDivState>{
    
    constructor(props:ExpandDivProp){
        super(props)
        this.state={
            isExpanded:false,
        }
    }
    
    render(){
        const {unExpandedMsg,expandedMsg} = this.props
        return(
            <div className={`expand-div ${this.state.isExpanded?"active":""}`} onClick={()=>this.setState({isExpanded:!this.state.isExpanded})}>
                <div className="expand-div-header-container">
                    <h1 className="expand-div-header">{unExpandedMsg}</h1>
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </div>
                
                <div className="expand-msg">
                    {expandedMsg}
                </div>
            </div>
        )
    }
}