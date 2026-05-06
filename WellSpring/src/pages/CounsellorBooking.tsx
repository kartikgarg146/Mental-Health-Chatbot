import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNavbar from '../components/StudentNavbar';
import { Calendar, Clock, Star, ArrowLeft, CheckCircle } from 'lucide-react';

interface Counsellor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  description: string;
  availability: string[];
  imageUrl: string;
}

const CounsellorBooking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCounsellor, setSelectedCounsellor] = useState<Counsellor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);

const counsellors = [
  {
    id: '1',
    name: 'Dr. Shyam Bhatt',
    specialty: 'Stress & Anxiety',
    rating: 4.9,
    experience: '25+ years',
    description: 'Stress, anxiety, and holistic mental health.',
    availability: ['9:00 AM', '2:00 PM', '4:00 PM'],
    imageUrl: 'https://www.shyambhat.com/wp-content/uploads/2018/10/ShyamBhat1-4.jpg'
  },
  {
    id: '2',
    name: 'Dr. Samir Parikh',
    specialty: 'Career Guidance',
    rating: 4.8,
    experience: '20+ years',
    description: 'Stress, workplace, and personal counseling.',
    availability: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
    imageUrl: 'https://www.fortishealthcare.com/drupal-data/doctors/dr-samir-parikh-1387.png'
  },
  {
    id: '3',
    name: 'Dr. Alok Pandey',
    specialty: 'Anxiety & Relationships',
    rating: 4.7,
    experience: '15+ years',
    description: 'Anxiety, depression, and relationship counseling.',
    availability: ['9:30 AM', '12:00 PM', '4:30 PM'],
    imageUrl: 'https://lagracecenter.com/wp-content/uploads/2023/03/dr-alok-pandey.jpg'
  },
  {
    id: '4',
    name: 'Dr. Rachna Bhargava',
    specialty: 'Academic & Career',
    rating: 4.6,
    experience: '12+ years',
    description: 'Academic stress, career guidance, and anxiety.',
    availability: ['10:00 AM', '1:00 PM', '5:00 PM'],
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGbHo6QL0_vWw/profile-displayphoto-shrink_200_200/B56ZOrFxFTGkAc-/0/1733742236676?e=2147483647&v=beta&t=wZOhm5Cvobj7ByKUqClFK3QHOvAbxMja2u4dolgzoXM'
  },
  {
    id: '5',
    name: 'Dr. Manish Kumar',
    specialty: 'CBT & Mindfulness',
    rating: 4.8,
    experience: '10+ years',
    description: 'Cognitive behavioral therapy, mindfulness, anxiety management.',
    availability: ['9:00 AM', '2:00 PM', '4:00 PM'],
    imageUrl: 'https://anvayahealthcare.com/wp-content/uploads/elementor/thumbs/manish-kumar-clinical-psychologist-rarxtgkntou51twhqxojl07izmcfvaucuyd4f3ojns.webp'
  },
  {
    id: '6',
    name: 'Dr. Achal Bhagat',
    specialty: 'Mood Disorders',
    rating: 4.7,
    experience: '30+ years',
    description: 'Mood disorders, PTSD, and autism spectrum disorders.',
    availability: ['9:00 AM', '12:00 PM', '3:00 PM'],
    imageUrl: 'https://images.apollo247.in/pd-cms/cms/2025-09/fa311ee5-1ebf-4291-a69b-59db07e5bff3.jpg'
  },
  {
    id: '7',
    name: 'Dr. Prerna Kohli',
    specialty: 'Depression & Relationships',
    rating: 4.6,
    experience: '15+ years',
    description: 'Depression, anxiety, and relationship counseling.',
    availability: ['10:00 AM', '12:30 PM', '2:30 PM'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Rmu_8cB2NVk1rYDNgN-G8soZc2sSnHLddQ&s'
  },
  {
    id: '8',
    name: 'Mansi Poddar',
    specialty: 'Trauma & Grief',
    rating: 4.9,
    experience: '10+ years',
    description: 'Trauma, grief, and emotional well-being.',
    availability: ['9:30 AM', '11:30 AM', '4:00 PM'],
    imageUrl: 'https://res.cloudinary.com/mansi-cdn/image/upload/f_auto/q_auto/CDN/img/Banner%20Phone%203.png'
  },
  {
    id: '9',
    name: 'Dr. Nitin Seth',
    specialty: 'Corporate & Workplace',
    rating: 4.7,
    experience: '18+ years',
    description: 'Workplace stress, corporate counseling, emotional intelligence.',
    availability: ['10:00 AM', '3:00 PM', '5:00 PM'],
    imageUrl: 'https://www.myhospitalnow.com/doctors/storage/users/Dr.-Nitin-Seth-768x1151-362931280_1753505960.jpg'
  },
  {
    id: '10',
    name: 'Dr. Seema Hingorrany',
    specialty: 'Anxiety & CBT',
    rating: 4.6,
    experience: '12+ years',
    description: 'Anxiety, depression, cognitive behavioral therapy.',
    availability: ['11:00 AM', '2:00 PM', '4:00 PM'],
    imageUrl: 'https://www.womensworldbanking.org/wp-content/uploads/2023/04/Copy-of-Seema-Image.jpg'
  }
];



  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      navigate('/student-dashboard');
    }, 2000);
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.15),_transparent_26%),linear-gradient(180deg,#020617_0%,#09142c_40%,#0c1f3d_100%)] flex items-center justify-center font-[Poppins] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        </div>
        <div className="relative text-center max-w-md mx-auto px-6">
          <CheckCircle className="w-24 h-24 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h2>
          <p className="text-slate-300 mb-8">Your anonymous session has been scheduled successfully.</p>
          <div className="bg-slate-900/80 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-emerald-500/10">
            <h3 className="font-semibold text-white mb-4">Session Details:</h3>
            <p className="text-slate-300 mb-2">Counsellor: {selectedCounsellor?.name}</p>
            <p className="text-slate-300 mb-2">Time: {selectedSlot}</p>
            <p className="text-slate-300">Your ID: Anonymous Student #{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#ecfdf5] to-[#fef3c7]">
      <StudentNavbar activeSection="booking" setActiveSection={() => {}} />
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center mb-12">
          <button
            onClick={() => navigate('/student-dashboard')}
            className="flex items-center text-slate-600 hover:text-cyan-500 mr-6 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-2 tracking-wide">Book a Counsellor</h1>
            <p className="text-gray-600 text-lg font-medium">Choose a counsellor for anonymous, confidential support</p>
          </div>
        </div>

        {!selectedCounsellor ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {counsellors.map((counsellor) => (
              <div key={counsellor.id} className="bg-white/85 border border-white/60 backdrop-blur-xl rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <img
                      src={counsellor.imageUrl}
                      alt="Counsellor"
                      className="w-20 h-20 rounded-full object-cover mr-4 border-3 border-cyan-200 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{counsellor.name}</h3>
                      <p className="text-cyan-600 font-medium mb-2">{counsellor.specialty}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 mr-1" />
                        <span className="text-sm text-gray-600">{counsellor.rating} • {counsellor.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{counsellor.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-medium">
                      {counsellor.availability.length} slots available
                    </div>
                    <button
                      onClick={() => setSelectedCounsellor(counsellor)}
                      className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(6,182,212,0.6)] shadow-lg"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/85 border border-white/60 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-cyan-500/10 p-10">
              <div className="text-center mb-10">
                <img
                  src={selectedCounsellor.imageUrl}
                  alt="Counsellor"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-cyan-200 shadow-lg"
                />
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedCounsellor.name}</h2>
                <p className="text-cyan-600 font-semibold text-lg">{selectedCounsellor.specialty}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Select a Time Slot</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCounsellor.availability.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                        selectedSlot === slot
                          ? 'border-cyan-400 bg-gradient-to-r from-cyan-50 to-sky-50 text-cyan-700'
                          : 'border-slate-200 text-gray-700 hover:border-cyan-300 hover:bg-slate-50'
                      }`}
                    >
                      <Clock className="w-4 h-4 inline mr-2" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-sky-50 p-6 rounded-2xl mb-8 border border-cyan-200">
                <h4 className="font-semibold text-cyan-800 mb-2">Privacy Notice</h4>
                <p className="text-cyan-700 text-sm leading-relaxed">
                  Your identity will remain completely anonymous. The counsellor will only see your wellness progress and session notes, never your personal information.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedCounsellor(null)}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 rounded-full font-semibold transition-all duration-200"
                >
                  Back to List
                </button>
                <button
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-sky-500 text-white py-3 rounded-full font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-20px_rgba(6,182,212,0.8)] disabled:bg-slate-400 disabled:cursor-not-allowed shadow-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CounsellorBooking;
