import { ImHome } from "react-icons/im";
import { GoLaw } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";
import { GrCertificate, GrGroup, GrWorkshop } from "react-icons/gr";
import { GiHotMeal } from "react-icons/gi";

const Services = () => {
  return (
    <div className="bg-primary pb-4">
      <div className="navbar bg-neutral text-neutral-content">
        {" "}
        <div className="navbar-start px-2 py-4 text-5xl">
          <ImHome />
        </div>
        <p className="normal-case text-xl max-w-sm text-left ">
          California Aging Services are here for you!
        </p>
      </div>
      <div className="w-[100%] flex flex-col mt-4 px-2">
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <ImHome className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">helping you stay at home</h2>
            <p>
              The Multipurpose Senior Services Program (MSSP) provides both
              social and healthcare management services to help older
              individuals remain in their own homes and communities. The MSSP
              team can provide minor home repair services, supplemental in-home
              care, transportation, and more.
            </p>
          </div>
        </div>
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <GoLaw className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">legal Services</h2>
            <p>
              Legal services are available to older adulst and adulst with
              disabilities throughout the state, advocating for victims of
              consumer fraud, elder abuse, and more.
            </p>
          </div>
        </div>
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <FaHandsHelping className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">programs for caregivers</h2>
            <p>
              The Family Cargivers program addresses the unique needs of family
              members who provide care to a relative. Temporary in-home relief,
              caregiving classes, and more are provided through this program.
            </p>
          </div>
        </div>
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <GrCertificate className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">insurance consultation</h2>
            <p>
              California's Health Insurance Counseling and AdvocacyProgram
              (HICAP) provides free, confidential counseling to individuals and
              their families on Medicare, long-term care insurance, and other
              health insurance-related issues. They can also help you plan ahead
              for long-term care.
            </p>
          </div>
        </div>
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <GrGroup className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">community services</h2>
            <p>
              Two of the many services connecting older adults to the community
              are adult day centers, which provide a setting to socialize while
              receiving support with daily tasks, and the Friendship Line
              California <a href="tel:18886701360">(1-888-670-1360)</a>, which
              provides friendly conversation to those feeling isolated.
            </p>
          </div>
        </div>
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <GiHotMeal className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">meal programs</h2>
            <p>
              The Congregate Meal program serves nutritious meals to older
              adults in a group setting with an opportunity to socialize. The
              Home-delivered Meal Program is also available to older adults who
              are homebound.
            </p>
          </div>
        </div>
        <div className="card min-w-fit bg-base-100 shadow-xl my-2 mx-auto">
          <div className="card-body">
            <figure>
              <GrWorkshop className="text-8xl" />
            </figure>
            <h2 className="card-title capitalize">employment training</h2>
            <p>
              The Senior Community Service Employment Program (SCSEP) provides
              job training in a variety of industries for low-income, unemployed
              adults ages 55 and older.{" "}
            </p>
          </div>
        </div>
        <div className="font-semibold p-4">
          Area Agencies on Aging coordinate services for older adults in each
          region of California. Eligibility requirements may apply. Visit the{" "}
          <a
            href="https://www.aging.ca.gov/Find_Services_in_My_County/"
            target="_"
          >
            California Department of Aging{" "}
          </a>{" "}
          to see what services are available in your locality, or by calling the
          California Aging and Adult Information Line at{" "}
          <a href="tel:18005102020">1-800-510-2020</a>.
        </div>
      </div>
    </div>
  );
};

export default Services;
