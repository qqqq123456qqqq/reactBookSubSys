import BookInfo from "../pages/BookInfo";
import Home from "../pages/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import AdminHome from "../pages/AdminLayout/AdminHome";
import ManageBooksHome from "../pages/AdminLayout/ManageBooksLayout/ManageBooksHome";
import ManageBooksLayout from "../pages/AdminLayout/ManageBooksLayout";
import AdminLayout from "../pages/AdminLayout";
import AddBook from "../pages/AdminLayout/ManageBooksLayout/AddBook";
import AdminBody from "../pages/AdminLayout/AdminHome/Adminbody";
import SearchResultPage from "../pages/AdminLayout/AdminHome/SearchResultPage";
import DelBook from "../pages/AdminLayout/ManageBooksLayout/DelBook";
import ChangeBook from "../pages/AdminLayout/ManageBooksLayout/ChangeBook";
import ManageUsersLayout from "../pages/AdminLayout/ManageUsersLayout";
import ManageUsersHome from "../pages/AdminLayout/ManageUsersLayout/ManageUsersHome";
import UserInfo from "../pages/AdminLayout/ManageUsersLayout/UserInfo";
import ApplyList from "../pages/AdminLayout/ManageUsersLayout/ApplyList";
import SubLogs from "../pages/AdminLayout/ManageUsersLayout/SubLogs";
import SelfInfo from "../pages/AdminLayout/SelfInfo";
import UserLayout from "../pages/UserLayout";
import UserHome from "../pages/UserLayout/UserHome";
import SearchResult from "../pages/UserLayout/UserHome/SearchResult";
import UserHomeBody from "../pages/UserLayout/UserHome/UserHomeBody";
import SubBook from "../pages/UserLayout/SubBook";
const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
    ,
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <AdminHome />,
                children: [
                    {
                        path: '',
                        element: <AdminBody />,
                    }, {
                        path: 'searchResultPage',
                        element: <SearchResultPage />
                    }

                ]
            }
            ,
            {
                path: 'manageBooks',
                element: <ManageBooksLayout />,
                children: [
                    {
                        path: '',
                        element: <ManageBooksHome />
                    }
                    ,
                    {
                        path: 'addbook',
                        element: <AddBook />
                    }
                    ,
                    {
                        path: 'delBook',
                        element: <DelBook />
                    }
                    ,
                    {
                        path: 'changeBook',
                        element: <ChangeBook />
                    }
                ]
            }
            ,
            {
                path: 'manageUsers',
                element: <ManageUsersLayout />,
                children: [
                    {
                        path: '',
                        element: <ManageUsersHome />
                    }
                    ,
                    {
                        path: 'userInfo',
                        element: <UserInfo />
                    }
                    ,
                    {
                        path: 'applyList',
                        element: <ApplyList />
                    }
                    ,
                    {
                        path: 'subLogs',
                        element: <SubLogs />
                    }
                ]
            }
            ,
            {
                path: 'selfInfo',
                element: <SelfInfo />,
            }

        ]
    }
    ,
    {
        path: '/bookInfo',
        element: <BookInfo />
    }
    ,
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <UserHome />,
                children: [
                    {
                        path: '',
                        element: <UserHomeBody />,
                    }
                    ,
                    {
                        path: 'searchResult',
                        element: <SearchResult />
                    }
                    ,

                ]
            }
            ,
            {
                path: 'subApplyList',
                element: <SubBook />
            }
            ,
            {
                path: 'selfInfo',
                element: <SelfInfo />
            }

        ]
    }
    ,


]
export default routes;