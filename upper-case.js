module.exports = function(RED) {
    function upperCaseFunction(config){
        RED.nodes.createNode(this, config);
        let node = this;
        node.on('input', function(msg){
            msg.payload = msg.payload.toUpperCase();
            node.send(msg);
        })
    }
    RED.nodes.registerType('upper-case', upperCaseFunction);
}