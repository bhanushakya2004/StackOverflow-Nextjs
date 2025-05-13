export default function UserProfile({params}: any) {
    return (
        <div className="container mx-auto center">
        <h1>User Profile</h1>
        <p className="text-4xl">User ID:
            <span className="p-2 rounded bg-orange-500 ml-2">{params.id}</span></p>
        <p>This is the user profile page.</p>
        </div>
    );
}