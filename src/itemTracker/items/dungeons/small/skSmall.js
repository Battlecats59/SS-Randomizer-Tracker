import React from 'react';
import noKey from '../../../../assets/dungeons/noSmallKey.png'
import smallKey_1 from '../../../../assets/dungeons/SS_Small_Key_Icon.png'

export default class SK_Small extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const current = this.props.current
        let parent = this.props.parent
        switch(current) {
            case 0:
                return <div id={"SK-small-key"}>
                    <img src={noKey} onClick={this.handleClick} alt={"No Small Key"} width={this.props.colWidth}/>
                </div>
            case 1:
                return <div id={"SK-small-key"}>
                    <img src={smallKey_1} onClick={this.handleClick} alt={"Small Key 1"} width={this.props.colWidth}/>
                </div>
            default:
                return null
        }
    }

    handleClick() {
        this.props.onChange("skSmall")
    }
}