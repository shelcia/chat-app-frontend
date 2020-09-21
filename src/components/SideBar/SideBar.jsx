import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import ContactsList from "./ContactsList";
import ChatsList from "./ChatsList";
import NewChatModal from "./NewChatModal";
import NewContactModal from "./NewContactModal";
import Settings from "./Setting";

const CHAT_KEY = "chats";
const CONTACTS_KEY = "contacts";
const SETTINGS_KEY = "settings";

const SideBar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CHAT_KEY);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeTabName = activeKey === CHAT_KEY ? "Chat" : "Contact";

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="sidebar">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey={CHAT_KEY}>Chats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={SETTINGS_KEY}>Settings</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={CHAT_KEY}>
              <ChatsList />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <ContactsList />
            </Tab.Pane>
            <Tab.Pane eventKey={SETTINGS_KEY}>
              <Settings />
            </Tab.Pane>
          </Tab.Content>
          <div className="bottom">
            <span className="mb-3">
              <b>id: </b>
              {id}
            </span>
            <Button onClick={() => setIsModalOpen(true)} className="button">
              New {activeTabName}
            </Button>
          </div>
        </Tab.Container>
        <Modal show={isModalOpen} onHide={closeModal}>
          {activeTabName === "Chat" ? (
            <NewChatModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
