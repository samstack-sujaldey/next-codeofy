import { MapPin, Mail } from "lucide-react";

function Rightcard() {
  return (
    <>
      <div className="space-y-8 rounded-3xl dark:bg-gray-800">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Our Offices
          </h3>

          <div className="flex gap-3 mb-4">
            <MapPin className="text-blue-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Jaipur (HQ)
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                123 Developer ,
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <MapPin className="text-blue-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Rajasthan
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                45 , Tech City jaipur
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Direct Support
          </h3>

          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl transition-colors">
            <Mail className="text-blue-500 shrink-0" />
            <p className="text-gray-900 dark:text-white">support@codeofy.com</p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.86053520977!2d75.79055784999998!3d26.885210750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1773725857533!5m2!1sen!2sin"
          title="Office Location"
          className="rounded-xl w-full h-64 border-0 dark:opacity-90"
          loading="lazy"
        />
      </div>
    </>
  );
}

export default Rightcard;
