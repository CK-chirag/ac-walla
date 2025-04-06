import React, { useState } from 'react';
import ACDetailCard from './acDetailCard';
import NewAcForm from './newAcForm';
import '../../../src/index.css';

const MainArea = () => {
    const [activeTab, setActiveTab] = useState('listedAC');

    return (
        <div className="old-ac-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div
                    className={`sidebar-item ${activeTab === 'listedAC' ? 'active' : ''}`}
                    onClick={() => setActiveTab('listedAC')}
                >
                    Listed ACs
                </div>
                <div
                    className={`sidebar-item ${activeTab === 'myListedAC' ? 'active' : ''}`}
                    onClick={() => setActiveTab('myListedAC')}
                >
                    My Listed ACs
                </div>
            </div>

            {/* Content Area */}
            <div className="content-area">
                {activeTab === 'listedAC' && (
                    <div>
                        {/* Render multiple ACDetailCards */}
                        <ACDetailCard />
                        <ACDetailCard />
                        <ACDetailCard />
                    </div>
                )}
                {activeTab === 'myListedAC' && (
                    <div>
                        {/* Render NewAcForm */}
                        <NewAcForm />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainArea;