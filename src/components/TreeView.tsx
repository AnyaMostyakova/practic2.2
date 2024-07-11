import React from 'react';
import TreeNode from './TreeNode';
import TreeModel from './TreeModel';

interface TreeViewProps {
    model: TreeModel;
    onNodeSelection: (node: TreeNode) => void;
}

const TreeView: React.FC<TreeViewProps> = ({ model, onNodeSelection }) => {
    const renderNode = (node: TreeNode, level: number = 0): React.ReactElement => {
        return (
            <div key={node.id} style={{ marginLeft: `${level * 20}px` }}>
                <input
                    type="checkbox"
                    checked={node.isSelected()}
                    onChange={() => onNodeSelection(node)}
                />
                <span>{node.name}</span>
                {node.isVisible() &&
                    node.children.map(child => renderNode(child, level + 1))}
            </div>
        );
    };

    return <div>{renderNode(model.rootNode)}</div>;
};

export default TreeView;
