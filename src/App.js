import { useContext } from "react";
import AddNotes from "./components/addNotes/AddNotes";
import SearchBar from "./components/searchBar/SearchBar";
import { Context } from "./Context/Context";
import NotesList from "./components/notesList/NotesList";

function App() {

  const { isOpenModal, setIsOpenModal}=useContext(Context)

  return (
    <>
      <SearchBar />
      {
        isOpenModal && <AddNotes />
      }
      <NotesList/>

    </>
  );
}

export default App;
