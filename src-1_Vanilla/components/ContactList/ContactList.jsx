import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/ContactList/ContactList.module.css' 




export const ContactList = ({ visibleContacts, onDeleteTodo }) => (
  <ul className={css.ContactList}>
    {visibleContacts.map(({ id, name, number }) => (
      <li
        key={id}
        className={css.ContactListItem}
      >
        <p
          className={css.ContactListText}>{name}:
          <span
            className={css.ContactListNumber}
          > {number}
          </span>
        </p>
        <button
          type="button"
          className={css.ContactListBtn}
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);


ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};


