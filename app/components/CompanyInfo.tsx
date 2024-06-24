const CompanyInfo = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-whited">
            <div className="flex items-center mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Atlassian_Stride_Logo.svg" alt="Atlassian Logo" className="w-12 h-12 mr-4" />
                <h1 className="text-3xl font-bold text-gray-600">Atlassian</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-800">
                <div>
                    <p><strong>Company size</strong></p>
                    <p>1k - 2k Employees</p>
                </div>
                <div>
                    <p><strong>Type</strong></p>
                    <p>Private</p>
                </div>
                <div>
                    <p><strong>Sector</strong></p>
                    <p>Information Technology, Infrastructure</p>
                </div>
                <div>
                    <p><strong>Funding</strong></p>
                    <p>Bootstrapped</p>
                </div>
                <div>
                    <p><strong>Founded In</strong></p>
                    <p>2019</p>
                </div>
                <div>
                    <p><strong>Founded By</strong></p>
                    <p>Scott Farquhar, Mike Cannon-Brookes</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;
