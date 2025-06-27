import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../Provider/ContextProvider';
import { Link } from 'react-router';
import { BookOpen, Heart, PlusCircle } from 'lucide-react';

const DashboardHome = () => {
    const { user } = useContext(AllContext);
    const [myRecipes, setMyRecipes] = useState([]);
    const [likeTotal, setLikeTotal] = useState(0);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://recipe-book-server-ten.vercel.app/recipes/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyRecipes(data);
                    const totalLikes = data.reduce((sum, recipe) => sum + (recipe.likeCount || 0), 0);
                    setLikeTotal(totalLikes);
                });
        }
    }, [user]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
            <h3 className="text-4xl font-bold mb-4 text-black dark:text-white">
                Welcome, {user?.displayName || "Chef"}!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-10">
                This is your dashboard. Track your recipes, share new ones, and see how others engage with your cooking!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Total Recipes */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:scale-103 transition hover:shadow-2xl">
                    <BookOpen size={40} className="text-[#ED1C24] mb-4" />
                    <h4 className="text-xl font-semibold text-[#ED1C24] mb-2">Total Recipes</h4>
                    <p className="text-4xl font-bold text-black dark:text-white">{myRecipes.length}</p>
                    <Link to="/dashboard/my-recipes" className="text-blue-500 hover:underline text-sm mt-3">
                        View My Recipes →
                    </Link>
                </div>

                {/* Add New Recipe */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:scale-103 transition hover:shadow-2xl">
                    <PlusCircle size={40} className="text-[#ED1C24] mb-4" />
                    <h4 className="text-xl font-semibold text-[#ED1C24] mb-2">Add New Recipe</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 text-center">
                        Got a new dish in mind? Share it with your fans!
                    </p>
                    <Link to="/dashboard/add-recipe" className="text-blue-500 hover:underline text-sm mt-2">
                        Add Recipe →
                    </Link>
                </div>

                {/* Total Likes */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:scale-103 transition hover:shadow-2xl">
                    <Heart size={40} className="text-[#ED1C24] mb-4" />
                    <h4 className="text-xl font-semibold text-[#ED1C24] mb-2">Total Likes</h4>
                    <p className="text-4xl font-bold text-black dark:text-white">{likeTotal}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                        Across all your recipes!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
