import "./App.css";
import MainComponent from "./Components/MainComponent";
import { TableDataProvider } from "./TableDataContext";
import { SidebarProvider } from "./SidebarContext";

function App() {
  return (
    <div className="container-fluid ps-0">
      <TableDataProvider>
        <SidebarProvider>
          <MainComponent />
        </SidebarProvider>
      </TableDataProvider>
    </div>
  );
}

export default App;
