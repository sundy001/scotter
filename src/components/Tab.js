import React from "react";
import classnames from "classnames";

export default function Tab({ current, tabs, onTabChange }) {
  const currentComponent = tabs.find(({ id }) => current === id).component;
  console.log();

  return (
    <React.Fragment>
      <ul className="tabs" data-tabs id="example-tabs">
        {tabs.map(({ id, name }) => {
          return (
            <li
              key={ id }
              className={ classnames('tabs-title', {'is-active': current === id}) }
              data-tab-id={ id }
              onClick={ onTabChange }
            >
              <a>{ name }</a>
            </li>
          );
        })}
      </ul>
      <div className="tabs-content">
        <div className="tabs-panel is-active">
          { currentComponent() }
        </div>
      </div>
    </React.Fragment>
  )
}