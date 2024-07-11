import TreeModel from './components/TreeModel';
import TreeView from './components/TreeView';
import TreeNode from "./components/TreeNode";
import { useEffect, useState } from "react";

const App: React.FC = () => {
    const [treeModel, setTreeModel] = useState<TreeModel>(initializeTree());

    function initializeTree(): TreeModel {
        const rootNode = new TreeNode('root', '1');
        const child1 = new TreeNode('child1', '1.1');
        const child2 = new TreeNode('child2', '1.2');
        const grandchild1 = new TreeNode('grandchild1', '1.2.1');
        const grandchild2 = new TreeNode('grandchild2', '1.2.2');
        const grandchild3 = new TreeNode('grandchild3', '1.2.1.1');
        const grandchild4 = new TreeNode('grandchild4', '1.2.1.2');
        const grandgrandchild1 = new TreeNode('grandgrandchild1', '1.1.1');
        const grandgrandchild2 = new TreeNode('grandgrandchild2', '1.1.2');
        const grandgrandchild3 = new TreeNode('grandgrandchild3', '1.2.2.1');
        const grandgrandchild4 = new TreeNode('grandgrandchild4', '1.2.2.2');

        rootNode.addChild(child1);
        rootNode.addChild(child2);
        child1.addChild(grandgrandchild1);
        child1.addChild(grandgrandchild2);
        child2.addChild(grandchild1);
        child2.addChild(grandchild2);
        grandchild2.addChild(grandgrandchild3);
        grandchild2.addChild(grandgrandchild4);
        grandchild1.addChild(grandchild3);
        grandchild1.addChild(grandchild4);

        return new TreeModel(rootNode);
    }

    function handleNodeSelection(node: TreeNode): void {
        treeModel.toggleNodeSelection(node);
        setTreeModel(new TreeModel(treeModel.rootNode));
    }

    useEffect(() => {
        // Обновить представление дерева при изменениях в модели
        setTreeModel(new TreeModel(treeModel.rootNode));
    }, [treeModel]);

    return (
        <div>
            <TreeView
                model={treeModel}
                onNodeSelection={handleNodeSelection}
                indentSize={20}
            />
        </div>
    );
};

export default App;
