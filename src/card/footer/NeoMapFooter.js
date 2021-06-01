import React from "react";
import Chip from "react-materialize/lib/Chip";
import Icon from "react-materialize/lib/Icon";
import NeoButton from "../../component/NeoButton";
import NeoOptionSelect from "../../component/NeoOptionSelect";
import NeoFooter from "./NeoFooter";

/**
 * A graph visualization footer displays the node labels present in the visualization.
 * When clicking on a label, the rendered property name on the node can be changed.
 */
class NeoMapFooter extends NeoFooter {
    /**
     * Set default state of the footer.
     */
    constructor(props) {
        super(props);
        this.state = {}
    }


    /**
     * Draw the footer (with chips) based on selected values.
     */
    render() {
        let colors = ["#588c7e", "#f2e394", "#f2ae72", "#d96459", "#5b9aa0", "#d6d4e0",
            "#b8a9c9", "#622569", "#ddd5af", "#d9ad7c", "#a2836e", "#674d3c", "grey"]
        let parsedParameters = this.props.params;
        if (parsedParameters && parsedParameters.nodeColors) {
            if (typeof (parsedParameters.nodeColors) === 'string') {
                colors = [parsedParameters.nodeColors]
            } else {
                colors = parsedParameters.nodeColors
            }
        }
        return (
            <div style={{marginLeft: '10px'}}>
                {this.props.nodeLabels.map((label, index) => {
                    return <Chip
                        key={index}
                        close={false}
                        closeIcon={<Icon className="close">close</Icon>}
                        options={null}
                        style={{
                            backgroundColor: colors[index % colors.length],
                            color: 'white'
                        }}
                    >
                        {label}
                    </Chip>

                })}
                
            </div>
        );
    }

}

export default (NeoMapFooter);