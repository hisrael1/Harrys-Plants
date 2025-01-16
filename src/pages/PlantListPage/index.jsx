import NavBar from "shared/NavBar";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";

const PlantListPage = () => {
  return (
    <RedirectToSignInIfSignedOut>
        <NavBar />
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
