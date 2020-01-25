import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props);
};
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.props.items} onSortEnd={this.onSortEnd} />;
  }
}

render(<SortableComponent />, document.getElementById('root'));