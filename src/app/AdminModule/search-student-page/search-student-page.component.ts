import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-student-page',
  templateUrl: './search-student-page.component.html',
  styleUrls: ['./search-student-page.component.css']
})
export class SearchStudentPageComponent implements OnInit {

  public searchStudentPage : FormGroup
  tech_drop : string = ""
  state_drop : string = ""
  city_drop  : string = ""
  levels_drop : string = ""
  marks_drop : string = ""

  constructor(private route: Router, private formBuilder : FormBuilder ) {
    this.searchStudentPage = this.formBuilder.group(
      {
        tech_drop : ['', [Validators.required]],
        state_drop : ['', [Validators.required]],
        city_drop : ['', [Validators.required]],
        levels_drop : ['', [Validators.required]],
        marks_drop : ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  selectedState: String = "select";

  states: Array<any> = [
		{ name: 'Andaman & Nicobar Islands', cities: ['Port Blair'] },
    { name: 'Andhra Pradesh', cities: ['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati'] },
    { name: 'Arunachal Pradesh', cities: ['Itanagar', 'Tawang', 'Bhismaknagar', 'Pasighat', 'Ziro', 'Bomdila'] },
    { name: 'Assam', cities: ['	Dispur', 'Guwahati', 'Tezpur', 'Dibrugarh', 'Silchar', 'North Lakhimpur'] },
    { name: 'Bihar', cities: ['Patna', 'Gaya', 'Biharsharif', 'Darbhanga', 'Bhagalpur'] },
    { name: 'Chandigarh', cities: ['Chandigarh'] },
    { name: 'Dadra & Nagar Haveli - Silvasa', cities: ['Daman'] },
    { name: 'Daman & Diu - Daman', cities: ['Daman'] },
    { name: 'Delhi', cities: ['New Delhi'] },
    { name: 'Goa', cities: ['Panaji',	'Vasco-da-Gama', 'Ponda', 'Margao', 'Mapusa', 'Goa Velha'] },
    { name: 'Gujarat', cities: ['Gandhinagar',	'Ahmedabad', 'Surat', 'Rajkot', 'Junagadh', 'Vadodara'] },
    { name: 'Haryana', cities: ['Faridabad', 'Gurgaon', 'Sonipat', 'Panipat', 'Ambala'] },
    { name: 'Himachal Pradesh', cities: ['Shimla',	'Dharamshala', 'Mandi', 'Solan', 'Bilaspur', 'Chamba'] },
    { name: 'Jammu & Kashmir', cities: ['Srinagar', 'Jammu'] },
    { name: 'Jharkhand', cities: ['Ranchi', 'Bokaro Steel City', 'Jamshedpur', 'Deoghar', 'Hazaribagh', 'Dhanbad'] },
    { name: 'Karnataka', cities: ['Bengaluru', 'Mysore', 'Davangere', 'Mangalore', 'Hubli-Dharwad', 'Belgaum'] },
    { name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Malappuram'] },
    { name: 'Lakshadweep', cities: ['Kavaratti'] },
    { name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar'] },
    { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'] },
    { name: 'Manipur', cities: ['Imphal', 'Bishnupur', 'Ukhrul', 'Tamenglong', 'Chandel', 'Senapati'] },
    { name: 'Meghalaya', cities: ['Shillong', 'Cherrapunji', 'Tura', 'Jowai', 'Baghmara', 'Nongpoh'] },
    { name: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Tuipang', 'Mamit'] },
    { name: 'Nagaland', cities: ['Kohima', 'Tuensang', 'Zunheboto', 'Mokokchung', 'Kiphire Sadar', 'Phek'] },
    { name: 'Odisha', cities: ['Bhubaneswar', 'Rourkela', 'Cuttack', 'Brahmapur', 'Puri', 'Sambalpur'] },
    { name: 'Puducherry', cities: ['Puducherry'] },
    { name: 'Punjab', cities: ['Chandigarh', 'Amritsar', 'Jalandhar', 'Ludhiana', 'Patiala', 'Kapurthala'] },
    { name: 'Rajasthan', cities: ['Jaipur', 'Bikaner', 'Jaisalmer', 'Jodhpur', 'Udaipur', 'Ajmer'] },
    { name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Rabdentse'] },
    { name: 'Tamil Nadu', cities: ['Chennai', 'Tiruchirappalli', 'Madurai', 'Erode', 'Vellore', 'Coimbatore'] },
    { name: 'Telangana', cities: ['Warangal', 'Nizamabad', 'Karimnagar', 'Adilabad', 'Khammam'] },
    { name: 'Tripura', cities: ['Agartala', 'Amarpur', 'Kumarghat', 'Udaipur', 'Gakulnagar', 'Kunjaban'] },
    { name: 'Uttar Pradesh', cities: ['Lucknow', 'Noida', 'Varanasi', 'Allahabad', 'Agra', 'Kanpur'] },
    { name: 'West Bengal', cities: ['Kolkata', 'Darjeeling', 'Siliguri', 'Asansol', 'Howrah', 'Durgapur'] },
    { name: 'Chhattisgarh', cities: ['Raipur', 'Bilaspur', 'Korba', 'Durg-Bhilainagar', 'Raigarh', 'Rajnandgaon'] },
    { name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Rishikesh', 'Kashipur', 'Haldwani'] },
	];

  cities: Array<any> = [];

  changeState(state: any) {
    this.cities = this.states.find((stat: any) => stat.name == state.target.value).cities;
  }

  get search() {
    return this.searchStudentPage.controls
  }

  searching() : void {
    console.log("Searching!")
  }
}